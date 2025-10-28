# Rating Checklist — How to reach 8–10 / 10

This checklist explains what reviewers look for and how to implement it.

1. **Project Purpose & README (10%)**
   - Clear one-paragraph description.
   - Architecture diagram (add `docs/architecture.png`).
   - Quickstart and demo links.

2. **Code Quality (20%)**
   - Use OpenZeppelin for reusable components.
   - Small, focused contracts with comments and NatSpec.
   - Linting and consistent formatting.

3. **Tests & Coverage (25%)**
   - Unit tests for happy paths and edge cases.
   - Gas and revert scenario tests.
   - Achieve >80% test coverage.

4. **Security (20%)**
   - Explain trust assumptions.
   - Add `SECURITY.md` and suggested auditing steps.
   - Avoid known anti-patterns (delegatecall misuse, unsafe math).

5. **Dev UX & Deployment (15%)**
   - Scripts to deploy to testnets.
   - Verified contract source (Etherscan).
   - Simple frontend demo + README examples.

6. **Community & Maintenance (10%)**
   - Contributing guide, issue templates, CI for PRs.
   - Keep dependencies up-to-date.

Follow these to reach an 8–10 rating.

