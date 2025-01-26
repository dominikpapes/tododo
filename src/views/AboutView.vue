<script setup>
import TaskCounter from '@/components/TaskCounter.vue';
</script>

<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="mt-5 about-container">
      <div class="card-body">
        <div class="card-title d-flex flex-column justify-content-center align-items-center">
          <img src="../assets/logo.png" class="logo" />
          <h1 class="text-center">ToDoDo</h1>
          <h4 class="text-center">Advanced WebDev 5th Project</h4>
        </div>
        <div class="container my-5">
          <ul class="list-group">
            <li class="list-group-item">
              <strong>1. Interpolation/One-way Binding:</strong>
              <ul>
                <li>Yes, <code>src/App.vue</code>, line 11</li>
                <li>
                  NavBar (<code>src/components/NavBar.vue</code>) receives a
                  <code>title</code> property that it displays.
                </li>
              </ul>
            </li>

            <li class="list-group-item">
              <strong>2. Two-way Binding:</strong>
              <ul>
                <li>Yes, <code>src/components/AddTask.vue</code>, line 30</li>
                <li>
                  Uses <code>v-model="newTask"</code>, where <code>newTask</code> is the text
                  entered in a textbox.
                </li>
              </ul>
            </li>

            <li class="list-group-item">
              <strong>3. Methods:</strong>
              <ul>
                <li>Yes, <code>src/views/HomeView.vue</code>, line 14</li>
                <li>Functions are defined using the Composition API.</li>
                <li>
                  An example is the function <code>addPendingTask</code>, which is passed to the
                  AddTask component (line 74).
                </li>
              </ul>
            </li>

            <li class="list-group-item">
              <strong>4. Computed Properties:</strong>
              <ul>
                <li>Yes, <code>src/components/TaskList.vue</code>, line 9</li>
                <li>Calculates the full component title by adding emojis based on the title.</li>
                <li>Computed property <code>computedTitle</code> is used on line 20.</li>
              </ul>
            </li>

            <li class="list-group-item">
              <strong>5. Scoped Style:</strong>
              <ul>
                <li>Yes, <code>src/components/TaskList.vue</code>, line 54</li>
              </ul>
            </li>

            <li class="list-group-item">
              <strong>6. Lifecycle Hook:</strong>
              <ul>
                <li>Yes, <code>src/views/HomeView.vue</code>, line 58</li>
                <li><code>onMounted()</code> loads data from localStorage.</li>
                <li>Line 68: <code>onUnmounted()</code> sends data to localStorage.</li>
                <li>Data is sent using asynchronous functions simulating backend data loading.</li>
              </ul>
            </li>

            <li class="list-group-item">
              <strong>7. Routing:</strong>
              <ul>
                <li>Yes, supported pages are <code>/</code> and <code>/about</code>.</li>
                <li>Other URLs open a 404 page (<code>src/views/NotFoundView.vue</code>).</li>
                <li>Routes are defined in <code>src/router/index.js</code>.</li>
              </ul>
            </li>

            <li class="list-group-item">
              <strong>8.1 Stateless Component:</strong>
              <ul>
                <li>Yes, <code>src/components/NavBar.vue</code></li>
                <li>NavBar has a <code>title</code> prop that displays the app title.</li>
              </ul>
            </li>

            <li class="list-group-item">
              <strong>8.2 Stateful Component:</strong>
              <ul>
                <li>Yes, <code>src/components/TaskCounter.vue</code></li>
                <li>
                  State is loaded using Pinia store and tracks how many tasks are completed during
                  the current session.
                </li>
                <li>
                  The session resets if the page is reloaded but persists when navigating within the
                  app.
                </li>
                <li>
                  TaskCounter is used in <code>HomeView.vue</code> and <code>AboutView.vue</code>.
                </li>
              </ul>
            </li>

            <li class="list-group-item">
              <strong>9. Event Emit:</strong>
              <ul>
                <li>Yes, <code>src/components/TaskList.vue</code>, line 13</li>
                <li>The event for "checking" a task is emitted on line 28.</li>
                <li>The event for removing a task is emitted on line 34.</li>
                <li>
                  Listeners for these events (<code>@check-task</code> and
                  <code>@remove-task</code>) are defined in the parent component
                  <code>src/view/HomeView.vue</code>.
                </li>
              </ul>
            </li>

            <li class="list-group-item">
              <strong>10. Store (Pinia):</strong>
              <ul>
                <li>Yes, <code>src/components/TaskCounter.vue</code>, line 11 → displays state</li>
                <li><code>src/views/HomeView.vue</code>, line 24 → increments the counter</li>
                <li>See 8.2 Stateful Component</li>
                <li>Store is defined in <code>src/stores/store.js</code>.</li>
              </ul>
            </li>

            <li class="list-group-item">
              <strong>11. Asynchronous Data Fetch:</strong>
              <ul>
                <li>Yes, <code>src/views/HomeView.vue</code>, line 36</li>
                <li>See 6. Lifecycle Hook</li>
                <li>
                  Data fetch is mocked by retrieving data from localStorage via an asynchronous
                  function <code>mockDataFetch()</code>.
                </li>
                <li>Sending data is also mocked using the <code>sendData()</code> function.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <TaskCounter />
</template>

<style>
.logo {
  width: 15rem;
  height: 15rem;
}

.about-container {
  width: 50rem;
}
</style>
