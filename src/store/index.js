import Vue from 'vue'
import Vuex from 'vuex'
import {moduleLinesOfCode} from './modules/linesOfCode'
import {moduleCommits} from './modules/commits'
import {modulePushes} from './modules/pushes'
import {moduleProjects} from './modules/projects'
import {moduleGlobal} from './modules/global'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global: moduleGlobal,
    linesOfCode: moduleLinesOfCode,
    commits: moduleCommits,
    pushes: modulePushes,
    projects: moduleProjects
  }
})