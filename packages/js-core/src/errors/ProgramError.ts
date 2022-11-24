import { MetaplexError } from './MetaplexError';

// TODO: Define this type elsewhere properly.
type Program = {
  name: string;
  address: { toBase58: () => string };
};

/** @group Errors */
export class ProgramError extends MetaplexError {
  readonly name: string = 'ProgramError';
  readonly program: Program;
  readonly logs?: string[];

  constructor(
    message: string,
    program: Program,
    cause?: Error,
    logs?: string[]
  ) {
    super(
      message,
      'program',
      `${program.name} [${program.address.toBase58()}]`,
      cause
    );
    this.program = program;
    this.logs = logs;
  }
}

type UnderlyingProgramError = Error & { code?: number; logs?: string[] };

/** @group Errors */
export class ParsedProgramError extends ProgramError {
  readonly name: string = 'ParsedProgramError';
  constructor(program: Program, cause: UnderlyingProgramError) {
    const ofCode = cause.code ? ` of code [${cause.code}]` : '';
    const message =
      `The program [${program.name}] ` +
      `at address [${program.address.toBase58()}] ` +
      `raised an error${ofCode} ` +
      `that translates to "${cause.message}".`;
    super(message, program, cause, cause.logs);
  }
}
