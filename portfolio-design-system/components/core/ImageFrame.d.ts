export interface ImageFrameProps {
  src: string;
  alt?: string;
  /** Desktop render height: 560 hero, 520 wide, 460/420 list, 400/380/340 in grids. */
  height?: number;
  /** 'contain' for product UI (default), 'cover' for photography and full-bleed scenes. */
  fit?: 'contain' | 'cover';
  lazy?: boolean;
}
/**
 * @startingPoint section="Core" subtitle="Full-measure image, 12px radius" viewport="700x300"
 */
export function ImageFrame(props: ImageFrameProps): JSX.Element;
