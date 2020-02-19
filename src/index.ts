import { LogToJSON } from 'log-to-json';
import { createReadStream, createWriteStream } from 'fs';

/**
 *
 * @param {string} inputFile input file path (absolute)
 * @param {string} outputFile output file path (absolute)
 * @return {object} promise resp
 */
export function converter(
  inputFile: string,
  outputFile?: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    const converter = new LogToJSON();

    const derivedOutputFile = findOutputFile(inputFile, outputFile);

    createReadStream(inputFile)
      .pipe(converter)
      .pipe(createWriteStream(derivedOutputFile))
      .on('finish', () => resolve(derivedOutputFile))
      .on('error', err => reject(err));
  });
}

/**
 *
 * @param {string} ip input file path
 * @param {string} op output file path
 * @return {string} derived output file path
 */
function findOutputFile(ip: string, op?: string): string {
  if (op) {
    return op;
  }

  return ip + '.json';
}
