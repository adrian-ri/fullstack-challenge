import express from "express";
import cors from "cors";
import initializeDatabase from "./db";
import { Deal } from "./interfaces";
const app = express();
const port = process.env.PORT || 3000;

/**
 * Welcome to the Fullstack Challenge for the Server!
 *
 * This is a basic express server.
 * You can customize and organize it to your needs.
 * Good luck!
 */
const db = initializeDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET /organization - get all organizations
app.get("/organizations", (req, res) => {
  const rows = db.prepare("SELECT * FROM organizations").all();
  res.json({ message: "Welcome to the server! 🎉", rows });
});

// GET /account- get all accounts
app.get("/accounts", (req, res) => {
  const rows = db.prepare("SELECT * FROM accounts").all();
  res.json({ message: "Welcome to the server! 🎉", rows });
});

// GET /deal - get all deals 
app.get("/deals", (req, res) => {
  const rows = db.prepare("SELECT * FROM deals").all();
  res.json({ message: "Welcome to the server! 🎉", rows });
});

// POST /organization - Create a new organization
app.post('/organizations',(req, res) => {
  const { name } = req.body;

  try {
    const stmt = db.prepare(`
      INSERT INTO organizations (name)
      VALUES (?)
    `);
    const result = stmt.run(name);

    res.json({ 
      message: "Organization Created",
      organizationId: result.lastInsertRowid 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create Organization" });
  }
});

// POST /account - Create a new account
app.post('/accounts',(req, res) => {
  const { name } = req.body;

  try {
    const stmt = db.prepare(`
      INSERT INTO accounts (name)
      VALUES (?)
    `);
    const result = stmt.run(name);

    res.json({ 
      message: "Account Created",
      accountId: result.lastInsertRowid 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create Account" });
  }
});

// POST /deal - Create a new deal
app.post('/deals',(req, res) => {
  const { organization_id, account_id } = req.body;

  try {
    const stmt = db.prepare(`
      INSERT INTO deals (organization_id, account_id)
      VALUES (?, ?)
    `);
    const result = stmt.run(organization_id, account_id);

    res.json({ 
      message: "Deal Created",
      dealId: result.lastInsertRowid 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create deal" });
  }
});

// GET /organizations/:id/deals - Get all deals for a specific organization
app.get("/organizations/:id/deals", (req, res) => {
  const orgId = Number(req.params.id);
  // validate id is a number
  if (isNaN(orgId)) {
    res.status(400).json({ error: 'Invalid organization ID' });
  }
  try {
    const deals = db.prepare(`SELECT * FROM deals WHERE organization_id = ?`).all(orgId) as Deal[];
    res.json({ 
      message: "Organization Deals",  
      deals
    });
  } catch (err) {
    console.error("Error fetching deals:", err);
    res.status(500).json({ error: "Failed to fetch organization deals" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
