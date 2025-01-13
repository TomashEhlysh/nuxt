import { c as defineEventHandler } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';

const getGoods = defineEventHandler(async (event) => {
  const { prisma } = useNuxtApp();
  const goods = await prisma.goods.findMany();
  return goods;
});

export { getGoods as default };
//# sourceMappingURL=getGoods.mjs.map
