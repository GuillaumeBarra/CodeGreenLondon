// Import the necessary modules
import {
  codeGreenLondon,
  emptyMeetup,
  getMeetupFromString,
  getSiteContent,
  isMeetupString,
} from './config';
import { meetups } from './types';

describe('isMeetupString', () => {
  test('Valid meetup string should return true', () => {
    expect(isMeetupString('codegreenlondon')).toBe(true);
  });

  test('Invalid meetup string should return false', () => {
    expect(isMeetupString('invalidmeetup')).toBe(false);
  });
});

describe('getMeetupFromString', () => {
  test('Valid meetup string should return the meetup enum value', () => {
    expect(getMeetupFromString('codegreenlondon')).toBe('codegreenlondon');
  });

  test('Invalid meetup string should return meetups.ERROR', () => {
    expect(getMeetupFromString('invalidmeetup')).toBe('emptymeetup');
  });

  test('Undefined meetup string should return meetups.ERROR', () => {
    expect(getMeetupFromString(undefined)).toBe('emptymeetup');
  });
});

describe('getSiteContent', () => {
  test('Valid meetup should return corresponding meetup content', () => {
    expect(getSiteContent(meetups.CGL)).toEqual(codeGreenLondon);
  });

  test('Invalid meetup should return empty meetup content', () => {
    expect(getSiteContent(meetups.ERROR)).toEqual(emptyMeetup);
  });
});
