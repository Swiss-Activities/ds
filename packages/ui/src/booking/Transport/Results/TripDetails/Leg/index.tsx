import { Card } from "../../../../Card";
import { Legend } from "../../../Legend";
import { Capacity } from "../../Capacity";
import { Platform } from "../../Platform";
import { Time } from "../../Time";
import { Type } from "../../Type";
import { TransportLeg } from "../../../../types/transport";

type TripLegProps = {
  leg: TransportLeg;
  isFirst: boolean;
  isLast: boolean;
};

export const TripLeg = ({ leg, isFirst, isLast }: TripLegProps) => {
  return (
    <Card paddingNormalised>
      <div className="grid grid-cols-[auto,16px,1fr,auto] items-start gap-3">
        <div className="col-start-1 row-span-2 flex h-full flex-col text-sm text-black">
          <Time time={leg.start.time} className="relative -top-1 font-bold" />
          <Time
            time={leg.end.time}
            className="relative -bottom-1.5 mt-auto font-medium"
          />
        </div>

        <div className="relative col-start-2 row-span-2 h-full w-4">
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gray-800" />
          <div
            className={`absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-solid border-gray-800 ${
              isFirst ? "bg-gray-800" : "bg-white"
            }`}
          />
          <div
            className={`absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-solid border-gray-800 ${
              isLast ? "bg-gray-800" : "bg-white"
            }`}
          />
        </div>

        <div className="col-start-3">
          <div className="relative -top-1.5 flex items-start justify-between">
            <div>
              <p className="relative top-0.5 text-sm font-bold text-black">
                {leg.start.name}
              </p>
              <div className="mt-2.5 flex flex-col gap-y-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
                <Type transportationType={leg.transportationType} />
                <Capacity capacity={leg.capacity} />
              </div>
              <Legend attributes={leg.attributes} />
            </div>
            <Platform
              platform={leg.start.platform}
              className="relative top-px !text-sm font-bold text-black"
            />
          </div>
        </div>

        <div className="col-start-3">
          <div className="relative top-2 flex items-center justify-between">
            <p className="relative bottom-0.5 text-sm text-black">
              {leg.end.name}
            </p>
            <Platform
              platform={leg.end.platform}
              className="!text-sm text-black"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
