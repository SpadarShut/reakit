import { closest } from "reakit-utils/closest";

export function dialogContains(dialog: Element, target: Element) {
  const orphanParent = closest(
    target,
    "[data-dialog='true'][data-orphan='true']"
  );
  const isOrphan =
    orphanParent && dialog.contains(orphanParent) && dialog !== orphanParent;
  return dialog.contains(target) && !isOrphan;
}
