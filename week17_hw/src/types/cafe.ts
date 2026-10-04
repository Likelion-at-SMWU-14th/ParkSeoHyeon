export interface Cafe {
  id: string;
  name: string;
  area: string;
  address: string;
  outlet: "많음" | "적음" | "없음" | null;
  noise: "조용함" | "보통" | "시끄러움" | null;
  wifi: boolean;
  hasLargeTable: boolean | null;
  coffeePrice: number;
  description: string;
  naverMapUrl: string;
}

export type CafeSummary = Pick<
  Cafe,
  | "id"
  | "name"
  | "area"
  | "address"
  | "outlet"
  | "noise"
  | "wifi"
  | "hasLargeTable"
  | "coffeePrice"
  | "naverMapUrl"
>;
