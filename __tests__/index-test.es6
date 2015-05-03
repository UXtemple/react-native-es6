import assert from 'assert';
import { App, Name } from '../index';
import { Component } from 'react-native';

describe('app', () => {
  it('has an identifier: Name', () => assert(typeof Name === 'string'));
  it('has a main component: App', () => assert(App instanceof Component));
});
