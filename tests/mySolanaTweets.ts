import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { MySolanaTweets } from "../target/types/my_solana_tweets";

describe("mySolanaTweets", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.MySolanaTweets as Program<MySolanaTweets>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
