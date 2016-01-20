# angular-directive-time

Simple angular directive for displaying time in a consistent fashion. Supports dynamic data binding and inclusive end time.

## Examples:

#### Display a normal time:

```
<span time="13:00"></span>
```

displays '01:00 PM'

--

#### Inclusive end times:

```
<span time="16:59" end="1"></span>
```

displays '05:00 PM'

--

####  Data-Binding

```
<span time="{{ vm.time }}"></span>
```

dynamic display

--