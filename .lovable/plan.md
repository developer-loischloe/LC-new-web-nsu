
Comparing the current HeroBanner against the reference screenshot:

**Already matches:**
- Three pill tags (MORNING CARE, SKIN CARE, NATURE PRODUCT)
- Headline "Glow Naturally with Ecococo Morning Sun"
- Description copy
- Morning Care promo card with arrow button
- Right-side hero image of three models
- Bottom carousel controls

**Differences to fix:**
1. **Brand name** — reference shows "olivia shop" in the navbar; current shows "oléo.shop"
2. **Promo card proportions** — in the reference, the inner product image is taller/more square (showing a serum dropper bottle), while the current version uses a wide 16:10 image
3. **Carousel controls position** — reference centers them under the image area only (right half), current spans them across the full section width
4. **Right image flush to edge** — reference image extends edge-to-edge; current sits inside `max-w-7xl` padding

### Plan

1. **Rename brand to "olivia shop"** in `src/components/Navbar.tsx`
2. **Adjust promo card** in `src/components/HeroBanner.tsx`:
   - Change image aspect from `aspect-[16/10]` to `aspect-square` (or `4/5`) for taller proportions
   - Slightly reduce card max-width for better balance
3. **Reposition carousel controls** to sit centered below the right image area instead of full-section center
4. **Make right image flush** to viewport edge on desktop (move it outside the `max-w-7xl` container or extend it)
5. **Background tone check** — ensure both halves share the same cream off-white background seamlessly

### Questions before implementing
- Should I rename the brand to "olivia shop", or keep "oléo.shop"?
- Should I keep the current `product-1.jpg` in the promo card (just resize), or are you uploading a serum dropper image?
