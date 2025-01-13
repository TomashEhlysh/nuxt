export default defineEventHandler(async (event) => {
    const { prisma } = useNuxtApp(); // Використовуємо Prisma для доступу до БД (як приклад)

    const goods = await prisma.goods.findMany(); // Отримуємо всі товари з бази даних

    return goods;
});