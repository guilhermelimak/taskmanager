import { database } from 'store'
import { emptyCard } from 'util'

export const importTasks = ({ dispatch, state }, tasksList) => {
  const tasksObj = JSON.parse(tasksList).tasks

  for (const key in tasksObj) {
    tasksObj[key] = { ...tasksObj[key], projectId: state.currentProjectId, listId: 'a' }
  }

  database
  .ref('cards/')
  .set(tasksObj)
}

export const replaceState = ({ dispatch }, newState) => {
  dispatch('REPLACE_STATE', newState)
  dispatch('DISABLE_LOADING')
}
export const changeCurrentProject = ({ dispatch }, projectId) => {
  dispatch('CHANGE_CURRENT_PROJECT', projectId)
}
