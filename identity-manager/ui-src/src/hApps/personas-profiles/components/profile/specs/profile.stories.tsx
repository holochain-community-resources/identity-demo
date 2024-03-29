import * as React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { MemoryRouter } from 'react-router-dom'
import { specs } from 'storybook-addon-specifications'
import { withNotes } from '@storybook/addon-notes'
import Profile, { Props } from '../profile'
import profileNotMappedNoDefaults from './profileNotMappedNoDefaults.md'
import profileNotMappedNoDefaultsManualMap from './profileNotMappedNoDefaultsManualMap.md'
import profileNotMappedHasDefaults from './profileNotMappedHasDefaults.md'
import profileMapped from './profileMapped.md'
import profileFaultyMapping from './profileFaultyMapping.md'
import { profileNotMappedNoMatchTests } from './profileNotMappedNoMatch.test'
import { profileNotMappedHasMatchTests } from './profileNotMappedHasMatch.test'
import { profileMappedTests } from './profileMapped.test'
import * as constants from '../../../constants'

const mockFn = jest.fn()
const mockPromise = jest.fn(() => Promise.reject('Storybook mock function'))

storiesOf('Profile', module)
  .add('Not mapped no defaults', () => {
    specs(() => profileNotMappedNoMatchTests)
    let props: Props
    props = {
      returnUrl: '',
      personas: constants.personas,
      selectedPersona: constants.personas[0],
      profile: constants.exampleProfileNotMappedNoDefaultsManualMap,
      save: jest.fn(() => Promise.resolve('')),
      getProfiles: mockPromise,
      getPersonas: mockPromise,
      setCurrentPersona: mockFn
    }
    return <MemoryRouter initialEntries={['/']}><Profile {...props} /></MemoryRouter>
  },
  {
    notes: { markdown: profileNotMappedNoDefaults }
  })
  .add('Not mapped no defaults manual mapping', () => {
    let props: Props
    props = {
      returnUrl: '',
      personas: constants.personas,
      selectedPersona: constants.personas[0],
      profile: constants.exampleProfileNotMappedNoDefaults,
      save: mockPromise,
      getProfiles: mockPromise,
      getPersonas: mockPromise,
      setCurrentPersona: mockFn
    }
    return <MemoryRouter initialEntries={['/']}><Profile {...props} /></MemoryRouter>
  },
  {
    notes: { markdown: profileNotMappedNoDefaultsManualMap }
  })


  .add('Not mapped has matching defaults', withNotes(profileNotMappedHasDefaults)(() => {
    specs(() => profileNotMappedHasMatchTests)
    let props: Props
    props = {
      returnUrl: '',
      personas: constants.personas,
      selectedPersona: constants.personas[0],
      profile: constants.exampleProfileNotMapped,
      save: mockPromise,
      getProfiles: mockPromise,
      getPersonas: mockPromise,
      setCurrentPersona: mockFn
    }
    return <MemoryRouter initialEntries={['/']}><Profile {...props} /></MemoryRouter>
  }))
  .add('Mapped to Persona info', withNotes(profileMapped)(() => {
    specs(() => profileMappedTests)
    let props: Props
    props = {
      returnUrl: '',
      personas: constants.personas,
      selectedPersona: constants.personas[0],
      profile: constants.exampleProfileMappedCorrectly,
      save: mockPromise,
      getProfiles: mockPromise,
      getPersonas: mockPromise,
      setCurrentPersona: mockFn
    }
    return <MemoryRouter initialEntries={['/']}><Profile {...props} /></MemoryRouter>
  }))
  .add('Faulty mapping', withNotes(profileFaultyMapping)(() => {
    let props: Props
    props = {
      returnUrl: '',
      personas: constants.personas,
      selectedPersona: constants.personas[0],
      profile: constants.exampleFaultyProfile,
      save: mockPromise,
      getProfiles: mockPromise,
      getPersonas: mockPromise,
      setCurrentPersona: mockFn
    }
    return <MemoryRouter initialEntries={['/']}><Profile {...props} /></MemoryRouter>
  }))
