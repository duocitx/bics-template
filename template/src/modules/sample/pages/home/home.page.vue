<template>
  <div>
    <PageHeading subtitle="list">
      <template #extra>
        <Breadcrumb></Breadcrumb>
      </template>
    </PageHeading>
    <div class="content">
      <Grid :name="`${title}.columns`"
            :data="items"
            :columns="columns"
            :filter="filter"
            @onAdd="add"
            @onDelete="remove"
            @onView="view"
            @onEdit="edit"
            @onRefresh="refresh">
      </Grid>
    </div>
  </div>
</template>
<script lang="ts" src="./home.page.ts"></script>
<style lang="scss" src="./home.page.scss"></style>
