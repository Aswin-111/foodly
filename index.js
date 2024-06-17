const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();

app.use(cors());

app.use(express.json());
const User = require("./models/user");
const ItemMast = require("./models/itemmast");
function authmiddleware(req, res, next) {
  try {
    const authHeader = req.header("Authorization");
    const token = authHeader.split(" ")[1];

    console.log(token);
    const decoded = jwt.verify(token, "pass@123");

    console.log(decoded);
    if (decoded) {
      req.user = decoded;
      return next();
    } else {
      return res.status(400).send("Invalid token");
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send("Invalid token");
  }
}

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const result = await User.findOne({ where: { username } });

  if (result.dataValues) {
    const payload = {
      id: result.dataValues.id,

      role: result.dataValues.role,
    };

    const secretKey = "pass@123";
    const options = {
      expiresIn: "365d",
    };

    const token = jwt.sign(payload, secretKey, options);

    return res.json({
      token: token,
      message: "Login successful",
      status: true,
    });
  } else {
    return result.json({
      status: false,
      message: "Username or password incorrect",
      status: false,
    });
  }
});

app.post("/change_password", authmiddleware, async function (req, res) {
  try {
    const { password } = req.body;
    const result = await User.update(
      { password },
      {
        where: {
          id: req.user.id,
        },
      }
    );

    console.log(result);
    return res.json({
      result,
      status: true,
      message: "Password updated successfully",
    });
  } catch (err) {
    return res.json({ result, status: false, message: "Something went wrong" });
  }
});

app.post("/create_user", async function (req, res) {
  try {
    const { username, password, role } = req.body;

    const result = await User.create({
      username: username,
      password: password,
      role: role,
    });

    return res.json({ message: "User created successfully", status: true });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong", status: false });
  }
});

app.post("/update_user", async function (req, res) {
  try {
    const { username, password, role } = req.body;

    const result = await User.update(
      {
        username: username,
        password: password,
        role: role,
      },
      {
        where: {
          id: req.user.id,
        },
      }
    );

    return res.json({ message: "User's data updated", status: true });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
});

app.post("/delete_user", async function (req, res) {
  try {
    const response = await User.destroy({
      where: {
        id: req.user.id,
      },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error occurred while deleting user", status: false });
  }
});

app.get("/get_users", async function (req, res) {
  try {
    const result = await User.findAll();
    return res.json({ result, status: true });
  } catch (err) {
    return res.json({ message: "Something went wrong", status: false });
  }
});



app.post("/create_product",async function (req, res) {
  try {
    const { item_name, item_qty, item_category, item_description } = req.body;

    const result = await ItemMast.create({item_name, item_qty, item_category, item_description});
    return res.json({ result, status: true });
  } catch (err) {
    return res.json({ message: "Something went wrong", status: false });
  }
});
app.listen(7000);
