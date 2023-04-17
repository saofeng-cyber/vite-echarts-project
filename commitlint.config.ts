import type { UserConfig } from '@commitlint/types';
// import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional']
};

module.exports = Configuration;
