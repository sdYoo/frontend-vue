import { sum } from '@/components/math';
import Vue from 'vue';
import LoginForm from '@/components/LoginForm.vue';
import { shallowMount } from '@vue/test-utils';

describe('LoginForm', () => {
  test('(1)testUtil 사용-컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.vm.username).toBe('');
  });
  test('(2)컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
    const instance = new Vue(LoginForm).$mount();
    // console.log(instance.username);
    expect(instance.username).toBe('');
  });
  test('ID는 이메일 형식이어야 한다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test@com',
        };
      },
    });
    // find(): template 테그를 찾는 기능을 함
    const idInput = wrapper.find('#username');
    console.log('인풋박스 값: ', idInput.element.value);
    console.log('email 형식 체크: ', wrapper.vm.isUsernameValid);
    // 잘못된 이메일일 때 경고가 제대로 호출되는지 확인
    const warningText = wrapper.find('.warning');
    // console.log('warning Tag: ', warningText.html());
    expect(warningText.exists()).toBeTruthy();
  });
  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
});

// sum(10, 20);
describe('math.js', () => {
  test('10 + 20 = 30', () => {
    const result = sum(10, 20);
    expect(result).not.toBe(40);
  });
});
