# Blockchain Explorer

> A custom blockchain built from scratch — with PoW mining, dynamic difficulty adjustment, cryptographic hash-linkage, real-time React explorer, and full SDLC practices including testing and deployment.

![Tech](https://img.shields.io/badge/React.js-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Tech](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Tech](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![Tech](https://img.shields.io/badge/REST_APIs-FF6C37?style=flat-square&logo=postman&logoColor=white)
![Entries](https://img.shields.io/badge/Validated_Entries-100+-brightgreen?style=flat-square)
![Status](https://img.shields.io/badge/Status-Complete-blue?style=flat-square)

---

## 📌 What It Does

Most people *use* blockchains — this project **builds one from scratch**.

This is a complete, full-stack Proof-of-Work blockchain system where you can mine new blocks, validate chain integrity, and explore the live blockchain state through a React.js block explorer — all connected via a clean REST API backend built with Node.js and Express.

Built following complete **SDLC practices** — from design and development through unit testing and deployment.

### Key Features

- ⛏️ **Proof-of-Work mining** — SHA-256 hashing with a configurable difficulty target (hash must start with N leading zeros)
- 🔄 **Dynamic difficulty adjustment** — automatically recalibrates based on block mining speed to maintain consistent block time
- 🔗 **Cryptographic hash-linkage** — each block stores the hash of the previous block, making the chain tamper-evident
- ✅ **Block validation mechanisms** — full chain integrity verification across 100+ connected entries
- 📊 **React.js Block Explorer** — real-time live view of the full blockchain state with seamless frontend-backend integration
- 🌐 **REST API** — clean, documented endpoints for mining, fetching, and validating the chain
- 🧪 **Unit tested** — key components tested following structured SDLC practices

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js |
| Backend | Node.js, Express.js |
| API | REST (custom-built) |
| Hashing | SHA-256 (Node.js `crypto` module) |
| HTTP Client | Axios / Fetch API |
| Testing | Unit Testing (Jest) |
| Dev Tools | Git, VS Code, Postman |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/rishusinghal15/Proof-of-Work-Blockchain-Explorer-Full-Stack-Implementation-.git
cd Proof-of-Work-Blockchain-Explorer-Full-Stack-Implementation-

# 2. Install backend dependencies
cd server
npm install

# 3. Install frontend dependencies
cd ../client
npm install
```

### Running the App

```bash
# Terminal 1 — Start the backend
cd server
npm start
# Runs on http://localhost:5000

# Terminal 2 — Start the frontend
cd client
npm start
# Runs on http://localhost:3000
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/chain` | Returns the full blockchain |
| `POST` | `/mine` | Mines a new block with given data |
| `GET` | `/validate` | Validates full chain integrity |
| `GET` | `/block/:index` | Returns a specific block by index |
| `GET` | `/chain/length` | Returns current chain length |

---

## 📁 Project Structure

```
Proof-of-Work-Blockchain-Explorer/
├── server/
│   ├── blockchain/
│   │   ├── Block.js         # Block class — structure & hashing
│   │   ├── Blockchain.js    # Chain logic — mining, validation, difficulty
│   │   └── utils.js         # SHA-256 helper utilities
│   ├── routes/
│   │   └── chain.js         # REST API route handlers
│   ├── tests/
│   │   └── blockchain.test.js  # Unit tests
│   └── index.js             # Express server entry point
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BlockCard.jsx    # Individual block display
│   │   │   ├── Explorer.jsx     # Full chain explorer view
│   │   │   └── MineForm.jsx     # Mine new block form
│   │   └── App.jsx
│   └── package.json
└── README.md
```

---

## 💡 How It Works

### Block Structure

```json
{
  "index": 5,
  "timestamp": "2026-03-15T10:30:00Z",
  "data": "Any transaction or payload data",
  "previousHash": "0000a3f9b2c81de...",
  "hash": "00002f8c1d74ab9...",
  "nonce": 48291,
  "difficulty": 4
}
```

### Mining Flow

```
Mine request received with data payload
        ↓
  Set target: hash must start with 'difficulty' zeros
        ↓
  Increment nonce → recalculate SHA-256 hash → repeat
        ↓
  Valid hash found → new block created
        ↓
  Block appended to chain with previousHash linkage
        ↓
  Difficulty auto-adjusts based on time taken
        ↓
  React Explorer polls API → UI updates in real-time
```

### Why the Chain Is Tamper-Proof

Each block's hash is computed from:

```
hash = SHA-256(index + timestamp + data + previousHash + nonce)
```

Changing *any* data in *any* block changes that block's hash — which breaks the `previousHash` reference in the next block — which cascades and invalidates the entire chain from that point forward.

---

## 📈 Technical Highlights

- 🔐 **100+ blockchain entries** validated with cryptographic hash-linkage
- ⚡ Dynamic difficulty keeps average block time stable regardless of hardware speed
- ✅ Unit tests cover core blockchain logic — block creation, hashing, chain validation
- 🔄 Complete SDLC followed — design → development → testing → deployment

---

## 🔮 Future Improvements

- [ ] P2P network with multiple nodes syncing in real-time
- [ ] Wallet addresses & digital signatures (ECDSA)
- [ ] Transaction mempool & mining rewards
- [ ] WebSocket for instant node-to-node updates
- [ ] Deploy to Render / Railway

---

## 👨‍💻 Author

**Rishu Singhal**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/rishusinghal)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/rishusinghal15)
[![Email](https://img.shields.io/badge/Gmail-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:rishusinghal2404@gmail.com)

---

⭐ **If you learned something or found this useful, drop a star — it motivates me to keep building!**
