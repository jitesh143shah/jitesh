const express = require("express")
const app = express();
const fs = require("fs");
const { json } = require("stream/consumers");
let path = __dirname + "/todos.json";
// ----------------------get the code-------------------------
app.get("/", (req, res) => {
    try {
        //path is for import the todos.json location
        // tod os is used here to get
        // the value from todos.json and
        // parse is used to read the json data into javascript
        // JSON is used object read and json is used for object send
        fs.readFile(path, { encoding: "utf-8" }, (err, todos) => {
            todos = todos ? JSON.parse(todos) : [];


            return res.status(200).json({ todos });
        })
    } catch (error) {
        return res.status(500).json({ message: "please try again" });
    }
});
app.use(express.json());
// ----------------------post the code-------------------------

app.post("/", (req, res) => {
    try {
        fs.readFile(path, { encoding: "utf-8" }, (err, todos) => {
            todos = todos ? JSON.parse(todos) : [];
            todos.push({ ...req.body, isChecked: req.body.isChecked || false, id: todos.length + 1 });
            fs.writeFile(
                path,
                JSON.stringify(todos), { encoding: "utf-8" },
                (err) => {
                    if (err) {
                        return res.status(500).json({ message: "please try again" })
                    }
                    else {
                        return res.status(201).json({ messgae: "Todos added/create sucessfully" });
                    }
                }
            );
        });

    } catch (error) {
        return res.status(500).json({ message: "please try again" });
    }
});
// ----------------------delete the code-------------------------


app.delete("/:id", (req, res) => {
    try {
        fs.readFile(path, { encoding: "utf-8" }, (err, todos) => {
            todos = todos ? JSON.parse(todos) : [];
            const filterTodos = todos.filter((todo) => todo.id !== +req.params.id);
            fs.writeFile(
                path,
                JSON.stringify(filterTodos),
                {
                    encoding: "utf-8",
                },
                (err) => {
                    if (err) {
                        return res.status(500).json({ message: "please try again" })
                    }
                    else {
                        return res.status(200).json({ messgae: "Todo deleted" })
                    }
                }
            )
        })
    } catch (error) {
        return res.status(500).json({ message: "please try again" });

    }
})
// ----------------------post by id the code-------------------------

app.post("/:id", (req, res) => {
    try {
        fs.readFile(path, { encoding: "utf-8" }, (err, todos) => {
            todos = todos ? JSON.parse(todos) : [];
            const todo = todos.find((todo) => todo.id === +req.params.id);
            if (!todo) return res.status(404), json({ message: "Todo not found" });
            return res.status(200).json({ todo });

        })

    } catch (error) {
        return res.status(500).json({ message: "please try again" });


    }
})


app.put("/:id", (req, res) => {
    try {
        fs.readFile(path, { encoding: "utf-8" }, (err, todos) => {
            todos = todos ? JSON.parse(todos) : [];
            const index = todos.findIndex((todo) => todo.id == req.params.id);
            todos[index] = { ...todos[index], ...req.body };
            console.log(index);

            if (index === -1) {
                return res.status(404).json({
                    message: "Todo not found",
                })
            }

            fs.writeFile(
                path,
                JSON.stringify(todos), { encoding: "utf-8" },
                (err) => {
                    if (err) {
                        return res.status(500).json({ message: "please try again" });
                    }

                    return res.status(200).json({
                        todo: todos[index],
                        message: "Todo update successfully"
                    });

                }
            );
        })

    } catch (error) {
        return res.status(500).json({ message: "please try again" });


    }
})


app.listen(5000, () => {
    console.log("server started")
});