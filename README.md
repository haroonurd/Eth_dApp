# Ethereum DApp Template

A production-oriented Ethereum DApp template that scores highly on standard open-source evaluation criteria (documentation, tests, CI, modular contracts, frontend integration).

## What this template includes

- Hardhat project with example **ERC20 Token** and **Staking** contracts (`contracts/`).
- Unit tests using Hardhat + Mocha/Chai (`test/`).
- Deployment scripts (`scripts/`).
- Simple React + Ethers frontend (`frontend/`) to interact with contracts.
- GitHub Actions CI to run tests.
- README, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY and license files.
- A scoring rubric to help you reach 8-10 / 10 rating.

## How to use

1. Install dependencies:
```bash
npm install
cd frontend
npm install
```

2. Run tests:
```bash
npm test
```

3. Run frontend (development):
```bash
npm run start
```

## Rating guidance 

Follow the `RATING.md` checklist included in the repo. Key points:
- Provide clear README, architecture diagrams and example usage.
- Write thorough unit tests with edge cases.
- Add CI that runs tests and (optionally) coverage.
- Use OpenZeppelin contracts where appropriate and document security assumptions.
- Publish deployment/demo on a public testnet with verified contracts.

