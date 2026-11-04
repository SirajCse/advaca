<!--
  Source path: resources/js/views/Pages/Task/Config/General.vue
  Component:   General
  Rebuilt clean from manifest path. Uses shadcn-vue components.
-->
<template>
  <div class="space-y-6">
    <PageHeader :title="$t('task.config')" />
    <ParentTransition appear :visibility="true">
      <Card>
        <CardHeader>
          <CardTitle>{{ $t('task.config') }}</CardTitle>
          <CardDescription>Configure Task settings.</CardDescription>
        </CardHeader>
        <CardContent>
          <form class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <Label>Enable feature</Label>
                <p class="text-sm text-muted-foreground">Toggle the Config feature on or off.</p>
              </div>
              <Switch v-model:checked="form.enabled" />
            </div>
            <Separator />
            <div>
              <Label for="default-value">Default value</Label>
              <Input id="default-value" v-model="form.defaultValue" class="mt-1" />
            </div>
          </form>
        </CardContent>
        <CardFooter class="justify-end">
          <Button @click="save">Save changes</Button>
        </CardFooter>
      </Card>
    </ParentTransition>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import PageHeader from '@/views/Components/PageHeader.vue'
import ParentTransition from '@/views/Components/ParentTransition.vue'

const form = reactive({
  enabled: true,
  defaultValue: '',
})

const save = () => {
  // Submit settings to backend
}
</script>
