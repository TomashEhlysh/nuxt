import { c as defineEventHandler, e as createError } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';

const _id_ = defineEventHandler(async (event) => {
  const { prisma } = useNuxtApp();
  const id = event.context.params.id;
  const good = await prisma.goods.findUnique({
    where: {
      id: parseInt(id)
    }
  });
  if (!good) {
    throw createError({ statusCode: 404, message: "Good not found" });
  }
  return good;
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
