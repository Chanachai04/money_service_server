const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.postMoney = async (req, res) => {
  try {
    const { moneyDetail, moneyDate, moneyInOut, moneyType, userId } = req.body;
    const result = await prisma.money_tb.create({
      data: {
        moneyDetail: moneyDetail,
        moneyDate: moneyDate,
        moneyInOut: parseFloat(moneyInOut),
        moneyType: parseInt(moneyType),
        userId: parseInt(userId),
      },
    });
    res.status(201).json({
      message: "Money created successfully",
      info: result,
    });
  } catch (err) {
    res.status(500).json({
      error: `Server Error: ${err}`,
    });
    console.log(err);
  }
};
