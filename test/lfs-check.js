/* eslint-disable func-names, prefer-arrow-callback */
const { parseGitBranch } = require('../lib/git-parsing');
const assert = require('assert');

describe('lfs-check', function () {
  describe('parseGitBranch', function () {
    it('returns the branch marked with an * ', function () {
      const output = '* master\n';
      const expected = 'master';

      const actual = parseGitBranch(output);

      assert.equal(actual, expected);
    });

    it('returns the branch marked with an * even if it\'s not the first one', function () {
      const output = '  master\n' +
                     '* feature\n';
      const expected = 'feature';
      const actual = parseGitBranch(output);

      assert.equal(actual, expected);
    });
  });
});