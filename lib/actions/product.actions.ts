'use server';
import { PrismaClient } from '@prisma/client';
import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';

// Get the latest products
export async function getLatestProducts() {
  const prisma = new PrismaClient();

  // Fetch the latest 4 products
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  return convertToPlainObject(data);
}