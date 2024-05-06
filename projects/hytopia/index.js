const { staking } = require("../helper/staking");

module.exports = {
  ethereum: {
    tvl: () => ({}),
    staking: staking(
      [
        "0x64F98a91C4bc03eA4C351B13bEDD979d2D6E5C72",
        "0x2F53e033C55eB6C87CEa259123C0a68Ca3578426", // NFT staked
        "0xf0e2c83BD68Ae79900Ab9892ac77C9311b278117", // NFT staked
      ],
      [
        "0xc91Ef786Fbf6d62858262C82c63dE45085dEa659",
        "0xcccCb68e1A848CBDB5b60a974E07aAE143ed40C3",
        "0x8D9710f0e193d3f95c0723eAAF1A81030Dc9116D",
      ]
    ),
  },
};
