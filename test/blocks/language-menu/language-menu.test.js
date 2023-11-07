import { expect } from '@esm-bundle/chai';
import { readFile } from '@web/test-runner-commands';

const { default: init } = await import('../../../blog/blocks/language-menu/language-menu.js');

describe('Language Menu', () => {
  it('closes on Escape', async () => {
    document.body.innerHTML = await readFile({ path: './mocks/body-open.html' });
    const el = document.querySelector('.language-menu');
    init(el);

    const keydown = new KeyboardEvent('keydown', { key: 'Escape' });
    el.dispatchEvent(keydown);

    const button = document.querySelector('.footer-region-button');
    expect(button.getAttribute('aria-expanded')).to.equal('false');
    expect(button.classList.contains('inline-dialog-active')).to.be.false;
  });
});
