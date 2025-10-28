/**
 * Simple deploy script for local testing:
 * 1) deploy ExampleToken with initial supply
 * 2) deploy SimpleStaking pointing to token
 */
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying with', deployer.address);

  const Token = await ethers.getContractFactory('ExampleToken');
  const token = await Token.deploy(ethers.parseUnits('1000000', 18));
  await token.waitForDeployment();
  console.log('Token deployed to', token.target);

  const Staking = await ethers.getContractFactory('SimpleStaking');
  const staking = await Staking.deploy(token.target, 1); // rewardRatePerBlock = 1 (demo)
  await staking.waitForDeployment();
  console.log('Staking deployed to', staking.target);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
