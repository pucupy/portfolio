import React from 'react';

/**
 * A visually-hidden-safe skip link shown only on keyboard focus, placed first in the DOM.
 * @startingPoint section="Core" subtitle="Visible skip-to-content link, keyboard only" viewport="700x90"
 */
export interface SkipLinkProps {
  /** id of the main content landmark to jump to */
  targetId?: string;
  /** visible label text */
  label?: string;
}
