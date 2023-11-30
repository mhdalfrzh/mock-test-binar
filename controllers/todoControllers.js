const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getTodos = async (req, res) => {
    try {
        const userId = req.userId;
        const todos = await prisma.todo.findMany({ where: { userId } });
        res.status(200).json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const addTodo = async (req, res) => {
    try {
        const userId = req.userId;
        const { content, isDone } = req.body;
        const todo = await prisma.todo.create({ data: { userId, content, isDone } });
        res.status(201).json({ message: "Todo berhasil dibuat", todo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { content, isDone } = req.body;
        const updatedTodo = await prisma.todo.update({
            where: { id: parseInt(id) },
            data: { content, isDone },
        });
        res.status(200).json({ message: "Todo berhasil diperbarui", updatedTodo })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.todo.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ message: 'Todo berhasil dihapus' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
module.exports = { getTodos, addTodo, updateTodo, deleteTodo }