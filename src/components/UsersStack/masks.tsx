import { canUseDOM } from "../../lib/dom";

const masksCreated: Document[] = [];

export function createMasks(document?: Document): void {
  if (!canUseDOM || !document || masksCreated.includes(document)) {
    return;
  }

  // eslint-disable-next-line no-restricted-globals
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttributeNS(null, "id", "__SVG_MASKS_NODE__");
  svgElement.setAttributeNS(null, "width", "0");
  svgElement.setAttributeNS(null, "height", "0");
  svgElement.style.position = "absolute";
  svgElement.style.width = "0px";
  svgElement.style.height = "0px";

  svgElement.innerHTML = `<defs>
  <path id="users_stack_16_left" d="M2,13.285A8 8 0 0 0 8 16A8 8 0 0 0 8 0A8 8 0 0 0 2 2.715A8 8 0 0 1 2,13.285" />
  <circle id="users_stack_16_circle" cx="8" cy="8" r="8" />
  
  <path id="users_stack_24_left" d="M2,18.625A12 12 0 0 0 12 24A12 12 0 0 0 12 0A12 12 0 0 0 2 5.375A12 12 0 0 1 2,18.625" />
  <circle id="users_stack_24_circle" cx="12" cy="12" r="12" />
  <path id="users_stack_24_right" d="M22,18.625A12 12 0 0 1 12 24A12 12 0 0 1 12 0A12 12 0 0 1 22 5.375A12 12 0 0 0 22,18.625" />

  <path id="users_stack_32_left" d="M2,23.75A16 16 0 0 0 16 32A16 16 0 0 0 16 0A16 16 0 0 0 2 8.25A16 16 0 0 1 2,23.75" />
  <circle id="users_stack_32_circle" cx="16" cy="16" r="16" />
  <path id="users_stack_32_right" d="M30,23.75A16 16 0 0 1 16 32A16 16 0 0 1 16 0A16 16 0 0 1 30 8.25A16 16 0 0 0 30,23.75" />

  <clipPath id="users_stack_mask_16_left">
    <use href="#users_stack_16_left"/>
  </clipPath>

  <clipPath id="users_stack_mask_16_circle">
    <use href="#users_stack_16_circle"/>
  </clipPath>

  <clipPath id="users_stack_mask_24_left">
    <use href="#users_stack_24_left"/>
  </clipPath>

  <clipPath id="users_stack_mask_24_circle">
    <use href="#users_stack_24_circle"/>
  </clipPath>

  <clipPath id="users_stack_mask_24_right">
    <use href="#users_stack_24_right"/>
  </clipPath>

  <clipPath id="users_stack_mask_32_left">
    <use href="#users_stack_32_left"/>
  </clipPath>

  <clipPath id="users_stack_mask_32_circle">
    <use href="#users_stack_32_circle"/>
  </clipPath>

  <clipPath id="users_stack_mask_32_right">
    <use href="#users_stack_32_right"/>
  </clipPath>
</defs>`;

  document.body.appendChild(svgElement);
  masksCreated.push(document);
}
