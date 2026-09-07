# Client transport and dependency maintenance — 2026-09-07

This change adds booking-scoped request credentials to the booking client, captures credentials from incoming ticket links before routing, and preserves them only in browser session storage/current-tab memory. An independent random device identifier is available for authenticated plan storage protocols. Server rendering never caches these credentials. Intentional ticket sharing includes the booking credential; telemetry must not include these URLs.

The booking restore operation uses POST. Both static and session-specific Axios clients attach a credential only to the matching booking. Authorized booking items and newly created payment attempts retain their parent booking credential for cancellation and payment status requests. Server-side authorization remains authoritative. Integrators must capture incoming credentials before initializing analytics, publish a no-referrer policy, and verify valid/expired credentials, fresh checkout, signed-in booking recovery, ticket sharing and restore in staging before adopting the updated submodule.

Dependencies were refreshed within declared compatible ranges, with sharp 0.35.4 supplying a corrected libvips runtime. Explicit React DOM peer/type declarations and two existing type-contract mismatches were corrected so a clean isolated install can run the full validation. The lockfile is committed.

## Local validation

- `bun run test:security`: 10 passed, including accepted/rejected credential boundaries and valid/invalid image input.
- `bun run test`: tokens 3, data 30, UI 52 passed (85 total).
- `bun run typecheck`: passed for tokens, data, UI and Storybook.
- `STORYBOOK_DISABLE_TELEMETRY=1 bun run build:web`: passed.
- `bun audit --json`: no reported advisories on 2026-09-07.
- `git diff --check`: passed.

CI repeats the focused security tests, UI typecheck and high-severity dependency gate using a frozen lockfile. Local validation used Bun 1.3.9; CI uses 1.3.14. No release, publication or production test was performed.

## Integration and rollback

Owner: design-system maintainer, with the consuming application's frontend owner. First publish the reviewed library revision, then update one consuming application in staging. Pass criteria: allowed flows continue, missing/wrong booking credentials are rejected by the server, SSR/analytics do not expose credentials, both image-processing tests pass, and the dependency audit has no high/critical findings. Roll out consumers gradually only after their application-specific acceptance checks. Roll back by pinning the previous reviewed library revision; retain server authorization and disable an incompatible consumer flow until corrected. Credential storage may be cleared locally to force re-establishment.

Follow-up: nested payment-attempt response envelopes preserve the creating request’s booking proof. The regression also verifies that an unknown parent cannot establish a proof.
