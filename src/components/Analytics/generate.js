function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const currentDate = new Date();
const startOfYear = new Date(currentDate.getFullYear(), 0, 1);

const generatedData = Array.from({ length: 100 }, (_, index) => {
  const units = getRandomInt(5, 50);
  const createdAt = generateRandomDate(startOfYear, currentDate).toISOString();

  return {
    _id: `${index + 1}`,
    isTrash: true,
    itemId: index + 1,
    itemName: `Item Name ${index + 1}`,
    units: units,
    expiryDate: generateRandomDate(
      new Date(),
      new Date(currentDate.getFullYear() + 1, 0, 1)
    ).toISOString(),
    itemNotes: `Additional notes about Item ${index + 1}`,
    user: "654163190674aa249883fed7",
    createdAt: createdAt,
    __v: 0,
  };
});

console.log(generatedData);


