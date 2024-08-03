import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { PRODUCT_CATEGORIES } from "./config";
import { Product } from "@/payload-types";
import { S3_URL } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "MWK" | "USD"| "EUR" | "BDT";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "MWK", notation = "compact" } = options;

  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}

export function getLabel(category: string | undefined) {
  if (!category) return null;
  return PRODUCT_CATEGORIES.find(({ value }) => value === category)?.label;
}

export function getValidURLs(product: Product, dir: 'media' | 'product_files'){
  return product.images
    .map(({ image }) =>
      typeof image === "string"
        ? image
        : `${S3_URL}/${dir}/${image.filename}`
    )
    .filter(Boolean) as string[];
}

export function constructMetadata({
  title = "FisheryXchange - the marketplace for Fish products",
  description = "FisheryXchange is an open-source marketplace for high-quality fish products.",
  image = "/thumbnail.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@Hampherjr",
    },
    metadataBase: new URL("https://FisheryXchange.up.railway.app"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
