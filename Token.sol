// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/// @title Example ERC20 token (OpenZeppelin style)
/// @notice This is a simple ERC20 token used for demonstration and staking
/// @dev Use OpenZeppelin in real projects; this is a minimal token for the template
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ExampleToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("ExampleToken", "EXT") {
        _mint(msg.sender, initialSupply);
    }
}
