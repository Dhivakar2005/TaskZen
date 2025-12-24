const mongoose = require("mongoose");
const Todo = require("./models/Todo");

mongoose.connect("mongodb://127.0.0.1:27017/todoapp")
    .then(async () => {
        console.log("\n=== TODOS IN DATABASE ===\n");
        const todos = await Todo.find().sort({ createdAt: 1 });

        if (todos.length === 0) {
            console.log("No todos found in database.");
        } else {
            todos.forEach((todo, index) => {
                console.log(`${index + 1}. ${todo.completed ? '✓' : '○'} ${todo.title}`);
                console.log(`   ID: ${todo._id}`);
                console.log(`   Completed: ${todo.completed}`);
                console.log(`   Created: ${todo.createdAt}`);
                console.log('');
            });
            console.log(`Total: ${todos.length} todo(s)\n`);
        }

        mongoose.connection.close();
        process.exit(0);
    })
    .catch(err => {
        console.error("Error:", err);
        process.exit(1);
    });
