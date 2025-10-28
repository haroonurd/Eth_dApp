// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/// @title Simple staking contract for ERC20 token
/// @notice Users can stake tokens to earn rewards. This is intentionally simple for learning.
/// @dev In production, consider reward math, security, and upgradeability.
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract SimpleStaking is ReentrancyGuard {
    IERC20 public immutable stakingToken;
    uint256 public rewardRatePerBlock; // simplistic reward metric
    mapping(address => uint256) public balances;
    mapping(address => uint256) public rewardDebt;

    uint256 public accRewardPerToken;
    uint256 public totalStaked;

    constructor(address _stakingToken, uint256 _rewardRatePerBlock) {
        stakingToken = IERC20(_stakingToken);
        rewardRatePerBlock = _rewardRatePerBlock;
    }

    function _updateRewards() internal {
        if (totalStaked == 0) { return; }
        // simplistic: accumulate per block
        accRewardPerToken += rewardRatePerBlock * 1e18 / totalStaked;
    }

    function stake(uint256 amount) external nonReentrant {
        require(amount > 0, "Cannot stake 0");
        _updateRewards();
        stakingToken.transferFrom(msg.sender, address(this), amount);
        balances[msg.sender] += amount;
        totalStaked += amount;
    }

    function withdraw(uint256 amount) external nonReentrant {
        require(amount > 0 && balances[msg.sender] >= amount, "Invalid amount");
        _updateRewards();
        balances[msg.sender] -= amount;
        totalStaked -= amount;
        stakingToken.transfer(msg.sender, amount);
    }

    function pendingReward(address user) public view returns (uint256) {
        // view of pending rewards (approx)
        if (totalStaked == 0) return 0;
        return (balances[user] * accRewardPerToken) / 1e18 - rewardDebt[user];
    }
}
