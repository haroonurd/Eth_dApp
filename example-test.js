const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('ExampleToken & SimpleStaking', function () {
  it('deploys token and staking, allows stake/withdraw', async function () {
    const [owner, alice] = await ethers.getSigners();

    const Token = await ethers.getContractFactory('ExampleToken');
    const token = await Token.deploy(ethers.utils.parseUnits('1000', 18));
    await token.deployed();

    const Staking = await ethers.getContractFactory('SimpleStaking');
    const staking = await Staking.deploy(token.address, 1);
    await staking.deployed();

    // transfer tokens to alice
    await token.transfer(alice.address, ethers.utils.parseUnits('100', 18));
    // alice approves staking contract
    await token.connect(alice).approve(staking.address, ethers.utils.parseUnits('50', 18));

    // alice stakes 50 tokens
    await staking.connect(alice).stake(ethers.utils.parseUnits('50', 18));
    const bal = await staking.balances(alice.address);
    expect(bal).to.equal(ethers.utils.parseUnits('50', 18));

    // withdraw 20 tokens
    await staking.connect(alice).withdraw(ethers.utils.parseUnits('20', 18));
    const bal2 = await staking.balances(alice.address);
    expect(bal2).to.equal(ethers.utils.parseUnits('30', 18));
  });
});
