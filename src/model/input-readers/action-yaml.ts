import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

export class ActionYamlReader {
  private actionYamlParsed: any;
  public constructor() {
    let filename = `action.yml`;
    if (!fs.existsSync(filename)) {
      filename = path.join(`..`, filename);
    }
    this.actionYamlParsed = YAML.parse(fs.readFileSync(filename).toString());
  }
  public GetActionYamlValue(key: string) {
    return this.actionYamlParsed.inputs[key]?.description || 'No description found in action.yml';
  }
}