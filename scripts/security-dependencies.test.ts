import { describe, expect, it } from 'bun:test';
import sharp from 'sharp';

describe('image processing runtime', () => {
  it('encodes and resizes an ordinary image with the patched libvips runtime', async () => {
    const png=await sharp({create:{width:4,height:4,channels:3,background:'#112233'}}).png().toBuffer();
    const output=await sharp(png).resize(2,2).png().toBuffer();
    expect(await sharp(output).metadata()).toMatchObject({width:2,height:2,format:'png'});
    expect(Number(sharp.versions.sharp.split('.')[1])).toBeGreaterThanOrEqual(35);
  });
  it('rejects a non-image input',async()=>{
    await expect(sharp(Buffer.from('not an image')).metadata()).rejects.toThrow();
  });
});
