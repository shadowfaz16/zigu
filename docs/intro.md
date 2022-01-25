---
sidebar_position: 20
---

# Introducción a Zigu

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple">This is an apple 🍎</TabItem>
  <TabItem value="orange">This is an orange 🍊</TabItem>
  <TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>

<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple">This is an apple 🍎</TabItem>
  <TabItem value="orange">This is an orange 🍊</TabItem>
  <TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>

<Tabs groupId="programming-languages">
  <TabItem value="js" label="Javascript">Use Ctrl + C to copy.</TabItem>
  <TabItem value="re" label="React">Use Command + C to copy.</TabItem>
<TabItem value="py" label="Python"><code>Use Command + C to copy.</code></TabItem>
</Tabs>

<Tabs groupId="programming-languages">
  <TabItem value="js" label="Windows">Use Ctrl + V to paste.</TabItem>
  <TabItem value="re" label="MacOS">Use Command + V to paste.</TabItem>
  <TabItem value="py" label="mc">```Use Command + V to paste.```</TabItem>
</Tabs>