import {
  createAccountBuilder,
  CreateAccountBuilderParams,
  transferSolBuilder,
  TransferSolBuilderParams,
} from './operations';
import type { Metaplex } from '@metaplex-foundation/js-core/Metaplex';
import { TransactionBuilderOptions } from '@metaplex-foundation/js-core';

/**
 * This client allows you to access the underlying Transaction Builders
 * for the write operations of the System module.
 *
 * @see {@link SystemClient}
 * @group Module Builders
 * */
export class SystemBuildersClient {
  constructor(protected readonly metaplex: Metaplex) {}

  /** {@inheritDoc createAccountBuilder} */
  createAccount(
    input: CreateAccountBuilderParams,
    options?: TransactionBuilderOptions
  ) {
    return createAccountBuilder(this.metaplex, input, options);
  }

  /** {@inheritDoc transferSolBuilder} */
  transferSol(
    input: TransferSolBuilderParams,
    options?: TransactionBuilderOptions
  ) {
    return transferSolBuilder(this.metaplex, input, options);
  }
}
