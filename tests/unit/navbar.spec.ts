import { shallowMount } from '@vue/test-utils';
import TheNavbar from './TheNavbar.vue';

test('TheNavbar', () => {
  // render the component
  const wrapper = shallowMount(TheNavbar);

  // should not allow for `username` less than 7 characters, excludes whitespace
  wrapper.setData({ username: ' '.repeat(7) });

  // assert the error is rendered
  expect(wrapper.find('.error').exists()).toBe(true);

  // update the name to be long enough
  wrapper.setData({ username: 'Lachlan' });

  // assert the error has gone away
  expect(wrapper.find('.error').exists()).toBe(false);
});

// https://vuejs.org/v2/cookbook/unit-testing-vue-components.html
