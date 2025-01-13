export default defineEventHandler(async (event) => {
    const { prisma } = useNuxtApp();
  
    const id = event.context.params.id;
  
    const good = await prisma.goods.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  
    if (!good) {
      throw createError({ statusCode: 404, message: 'Good not found' });
    }
  
    return good;
});