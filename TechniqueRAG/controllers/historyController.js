import History from "../models/History.js";

export const getHistory = async (req, res) => {
  try {
    const history = await History.find().sort({ createdAt: -1 });
    const formatted = history.map((item) => ({
      id: item._id.toString(),
      inputText: item.inputText,
      techniques: item.techniques,
      timestamp: item.createdAt,
      summary: item.summary || "",
    }));
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch history" });
  }
};

export const createHistory = async (req, res) => {
  try {
    const { inputText, techniques, summary } = req.body;
    if (!inputText || !Array.isArray(techniques)) {
      return res.status(400).json({ message: "Invalid payload" });
    }
    const doc = await History.create({ inputText, techniques, summary });
    res.status(201).json({
      id: doc._id.toString(),
      inputText: doc.inputText,
      techniques: doc.techniques,
      timestamp: doc.createdAt,
      summary: doc.summary || "",
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to save history" });
  }
};
