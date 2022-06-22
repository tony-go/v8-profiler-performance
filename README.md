# v8 profiler performance

The purpose of this repository is to measure the time it took for the profiler during the following steps:
* enable
* start
* stop

Thus, for the following versions of node: 8, 10, 12, 14, 16, 17 & 18

## Results

We run the same piece of code 10 times for each version.

### Node 8

<details>
<summary>Results</summary>

```bash
=======iteration number 1 for node v8.17.0========
enable1: 1.336ms
start1: 727.152ms
stop1: 241.976ms
=======iteration number 2 for node v8.17.0========
enable2: 9.257ms
start2: 678.460ms
stop2: 231.631ms
=======iteration number 3 for node v8.17.0========
enable3: 0.168ms
start3: 671.201ms
stop3: 228.960ms
=======iteration number 4 for node v8.17.0========
enable4: 0.187ms
start4: 659.756ms
stop4: 232.281ms
=======iteration number 5 for node v8.17.0========
enable5: 0.183ms
start5: 678.407ms
stop5: 211.591ms
=======iteration number 6 for node v8.17.0========
enable6: 0.162ms
start6: 659.463ms
stop6: 203.173ms
=======iteration number 7 for node v8.17.0========
enable7: 0.202ms
start7: 676.230ms
stop7: 225.956ms
=======iteration number 8 for node v8.17.0========
enable8: 0.170ms
start8: 655.906ms
stop8: 217.876ms
=======iteration number 9 for node v8.17.0========
enable9: 0.164ms
start9: 673.274ms
stop9: 210.625ms
=======iteration number 10 for node v8.17.0========
enable10: 0.215ms
start10: 653.882ms
stop10: 204.801ms
```

</details>

### Node 10

<details>
<summary>Results</summary>

```
=======iteration number 1 for node v10.24.1========
enable1: 6.080ms
start1: 731.465ms
stop1: 250.021ms
=======iteration number 2 for node v10.24.1========
enable2: 4.227ms
start2: 707.470ms
stop2: 279.568ms
=======iteration number 3 for node v10.24.1========
enable3: 0.278ms
start3: 740.168ms
stop3: 273.195ms
=======iteration number 4 for node v10.24.1========
enable4: 0.247ms
start4: 687.013ms
stop4: 270.111ms
=======iteration number 5 for node v10.24.1========
enable5: 0.229ms
start5: 704.648ms
stop5: 240.393ms
=======iteration number 6 for node v10.24.1========
enable6: 0.247ms
start6: 718.053ms
stop6: 288.611ms
=======iteration number 7 for node v10.24.1========
enable7: 0.238ms
start7: 696.985ms
stop7: 248.558ms
=======iteration number 8 for node v10.24.1========
enable8: 0.265ms
start8: 719.725ms
stop8: 292.561ms
=======iteration number 9 for node v10.24.1========
enable9: 0.236ms
start9: 691.635ms
stop9: 285.168ms
=======iteration number 10 for node v10.24.1========
enable10: 0.256ms
start10: 681.308ms
stop10: 248.522ms
```

</details>

### Node 12

<details>
<summary>Results</summary>

```
=======iteration number 1 for node v12.22.12========
enable1: 1.208ms
start1: 865.557ms
stop1: 4.937ms
=======iteration number 2 for node v12.22.12========
enable2: 0.221ms
start2: 1686.752ms
stop2: 0.496ms
=======iteration number 3 for node v12.22.12========
enable3: 1.647ms
start3: 888.838ms
stop3: 0.512ms
=======iteration number 4 for node v12.22.12========
enable4: 0.177ms
start4: 1681.483ms
stop4: 0.529ms
=======iteration number 5 for node v12.22.12========
enable5: 0.095ms
start5: 2504.839ms
stop5: 0.852ms
=======iteration number 6 for node v12.22.12========
enable6: 0.090ms
start6: 887.326ms
stop6: 0.540ms
=======iteration number 7 for node v12.22.12========
enable7: 0.150ms
start7: 1711.653ms
stop7: 0.462ms
=======iteration number 8 for node v12.22.12========
enable8: 0.084ms
start8: 883.399ms
stop8: 0.498ms
=======iteration number 9 for node v12.22.12========
enable9: 0.165ms
start9: 861.309ms
stop9: 0.500ms
=======iteration number 10 for node v12.22.12========
enable10: 0.168ms
start10: 1708.810ms
stop10: 0.696ms
```

</details>

### Node 14

<details>
<summary>Results</summary>
```
=======iteration number 1 for node v14.19.3========
enable1: 0.918ms
start1: 60.892ms
stop1: 1.583ms
=======iteration number 2 for node v14.19.3========
enable2: 0.067ms
start2: 119.534ms
stop2: 0.607ms
=======iteration number 3 for node v14.19.3========
enable3: 1.841ms
start3: 182.575ms
stop3: 0.392ms
=======iteration number 4 for node v14.19.3========
enable4: 2.618ms
start4: 1.307s
stop4: 0.382ms
=======iteration number 5 for node v14.19.3========
enable5: 0.064ms
start5: 2.029s
stop5: 0.389ms
=======iteration number 6 for node v14.19.3========
enable6: 0.047ms
start6: 936.534ms
stop6: 0.467ms
=======iteration number 7 for node v14.19.3========
enable7: 0.093ms
start7: 1.927s
stop7: 0.435ms
=======iteration number 8 for node v14.19.3========
enable8: 0.04ms
start8: 937.798ms
stop8: 0.429ms
=======iteration number 9 for node v14.19.3========
enable9: 0.098ms
start9: 963.034ms
stop9: 0.418ms
=======iteration number 10 for node v14.19.3========
enable10: 0.087ms
start10: 1.862s
stop10: 0.361ms
```
</details>

### Node 16

<details>
<summary>Results</summary>

```
=======iteration number 1 for node v16.15.1========
enable1: 0.389ms
start1: 30.88ms
stop1: 0.948ms
=======iteration number 2 for node v16.15.1========
enable2: 0.031ms
start2: 86.3ms
stop2: 14.107ms
=======iteration number 3 for node v16.15.1========
enable3: 1.141ms
start3: 223.162ms
stop3: 51.24ms
=======iteration number 4 for node v16.15.1========
enable4: 1.784ms
start4: 1.568s
stop4: 535.418ms
=======iteration number 5 for node v16.15.1========
enable5: 0.084ms
start5: 1.337s
stop5: 484.401ms
=======iteration number 6 for node v16.15.1========
enable6: 0.183ms
start6: 2.518s
stop6: 822.92ms
=======iteration number 7 for node v16.15.1========
enable7: 0.061ms
start7: 3.993s
stop7: 1.531s
=======iteration number 8 for node v16.15.1========
enable8: 0.071ms
start8: 1.171s
stop8: 300.553ms
=======iteration number 9 for node v16.15.1========
enable9: 0.038ms
start9: 1.173s
stop9: 311.174ms
=======iteration number 10 for node v16.15.1========
enable10: 0.037ms
start10: 2.471s
stop10: 842.573ms

```
</details>

### Node 17 

<details>
<summary>Results</summary>

```
=======iteration number 1 for node v17.9.1========
enable1: 0.31ms
start1: 292.87ms
stop1: 64.427ms
=======iteration number 2 for node v17.9.1========
enable2: 0.038ms
start2: 1.550s
stop2: 502.329ms
=======iteration number 3 for node v17.9.1========
enable3: 1.097ms
start3: 1.136s
stop3: 270.334ms
=======iteration number 4 for node v17.9.1========
enable4: 0.233ms
start4: 2.382s
stop4: 809.793ms
=======iteration number 5 for node v17.9.1========
enable5: 0.063ms
start5: 1.123s
stop5: 282.714ms
=======iteration number 6 for node v17.9.1========
enable6: 0.042ms
start6: 2.389s
stop6: 860.332ms
=======iteration number 7 for node v17.9.1========
enable7: 3.086ms
start7: 3.967s
stop7: 1.425s
=======iteration number 8 for node v17.9.1========
enable8: 0.064ms
start8: 1.227s
stop8: 313.854ms
=======iteration number 9 for node v17.9.1========
enable9: 0.037ms
start9: 1.157s
stop9: 278ms
=======iteration number 10 for node v17.9.1========
enable10: 0.036ms
start10: 2.478s
stop10: 795.727ms

```
</details>

### Node 18

<details>
<summary>Results</summary>

```
=======iteration number 1 for node v18.4.0========
enable1: 0.167ms
start1: 946.463ms
stop1: 222.205ms
=======iteration number 2 for node v18.4.0========
enable2: 0.034ms
start2: 2.194s
stop2: 745.203ms
=======iteration number 3 for node v18.4.0========
enable3: 1.379ms
start3: 1.143s
stop3: 317.818ms
=======iteration number 4 for node v18.4.0========
enable4: 0.721ms
start4: 2.394s
stop4: 854.496ms
=======iteration number 5 for node v18.4.0========
enable5: 0.058ms
start5: 3.765s
stop5: 1.514s
=======iteration number 6 for node v18.4.0========
enable6: 0.075ms
start6: 1.239s
stop6: 296.223ms
=======iteration number 7 for node v18.4.0========
enable7: 0.04ms
start7: 994.406ms
stop7: 258.906ms
=======iteration number 8 for node v18.4.0========
enable8: 0.036ms
start8: 2.360s
stop8: 768.176ms
=======iteration number 9 for node v18.4.0========
enable9: 0.032ms
start9: 1.177s
stop9: 342.259ms
=======iteration number 10 for node v18.4.0========
enable10: 0.041ms
start10: 2.358s
stop10: 899.227ms

```
</details>

## Requirement
* nvm

## Usage

```bash
./run.sh
```
