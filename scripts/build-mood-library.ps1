$ErrorActionPreference = "Continue"
$api = "https://api.piped.private.coffee/search"
$outPath = Join-Path $PSScriptRoot "..\src\mood-library.json"

$buckets = @(
  @{
    mood = "calm"; language = "ml"
    queries = @(
      "malayalam romantic songs official",
      "malayalam melody songs",
      "malayalam love songs",
      "yesudas romantic malayalam",
      "vineeth sreenivasan songs",
      "ks chithra malayalam songs",
      "shreya ghoshal malayalam",
      "sid sriram malayalam",
      "malayalam 90s romantic songs",
      "malayalam acoustic songs",
      "malayalam unplugged songs",
      "malayalam slow hits",
      "premam songs malayalam",
      "bangalore days songs",
      "malayalam film melody 2010",
      "malayalam ghazal songs",
      "haricharan malayalam songs",
      "vijay yesudas songs",
      "malayalam piano cover song",
      "sushin shyam songs"
    )
  },
  @{
    mood = "happy"; language = "ml"
    queries = @(
      "malayalam dance songs official",
      "malayalam party songs",
      "malayalam mass songs",
      "malayalam wedding songs",
      "malayalam folk dance",
      "malayalam hit songs 2023",
      "malayalam hit songs 2024",
      "malayalam hit songs 2025",
      "malayalam celebration songs",
      "malayalam kuthu songs",
      "jimikki kammal songs",
      "malayalam comedy songs",
      "malayalam rap songs",
      "nivin pauly songs",
      "dulquer salmaan songs dance",
      "malayalam item songs",
      "malayalam fast songs",
      "mappila songs dance",
      "malayalam onam songs",
      "malayalam college songs"
    )
  },
  @{
    mood = "soothing"; language = "ml"
    queries = @(
      "malayalam lullaby songs",
      "malayalam flute songs",
      "malayalam violin cover",
      "malayalam devotional songs",
      "yesudas devotional malayalam",
      "malayalam classical songs",
      "malayalam night songs",
      "malayalam rain songs",
      "malayalam instrumental songs",
      "malayalam bhajan",
      "malayalam sleep songs",
      "kerala folk songs slow",
      "malayalam carnatic songs",
      "malayalam prayer songs",
      "malayalam soft background",
      "malayalam saxophone cover",
      "malayalam humming songs",
      "ambili songs malayalam",
      "kumbalangi nights songs",
      "malayalam soul songs"
    )
  },
  @{
    mood = "calm"; language = "en"
    queries = @(
      "ed sheeran official video",
      "coldplay official songs",
      "adele official video songs",
      "sam smith official video",
      "lewis capaldi official",
      "passenger let her go songs",
      "john legend official songs",
      "shawn mendes official",
      "charlie puth official songs",
      "billie eilish official video",
      "taylor swift folklore songs",
      "lana del rey official",
      "the weeknd official songs slow",
      "acoustic love songs official",
      "james arthur official",
      "calum scott official",
      "alessia cara official",
      "ruth b official",
      "alec benjamin official",
      "dean lewis official"
    )
  },
  @{
    mood = "happy"; language = "en"
    queries = @(
      "bruno mars official video",
      "pharrell williams official",
      "justin timberlake official",
      "dua lipa official video",
      "katy perry official songs",
      "maroon 5 official",
      "mark ronson uptown funk songs",
      "ariana grande official",
      "doja cat official",
      "beyonce official songs",
      "calvin harris official",
      "the weeknd blinding lights songs",
      "bts dynamite butter official",
      "harry styles official",
      "lizzo official songs",
      "meghan trainor official",
      "walk the moon shut up and dance",
      "one direction official songs",
      "lady gaga official songs",
      "black eyed peas official"
    )
  },
  @{
    mood = "soothing"; language = "en"
    queries = @(
      "yiruma piano official",
      "ludovico einaudi official",
      "chopin nocturne piano",
      "debussy clair de lune piano",
      "max richter official",
      "olafur arnalds piano",
      "nils frahm piano",
      "brian eno ambient",
      "marconi union weightless",
      "relaxing piano solo",
      "sleep piano music song",
      "classical piano pieces",
      "beethoven moonlight sonata",
      "satie gymnopedie",
      "joe hisaishi piano",
      "thomas bergersen emotional",
      "helen jane long piano",
      "brian crain piano",
      "kevin kern piano",
      "lofi chill piano song"
    )
  }
)

$seen = @{}
$library = New-Object System.Collections.Generic.List[object]
$counts = @{}

function Clean-Title([string]$title) {
  if (-not $title) { return "Untitled" }
  $t = $title -replace "\s+", " "
  $t = ($t -split "\||/|•|–|—")[0].Trim()
  if ($t.Length -gt 72) { $t = $t.Substring(0, 72).Trim() }
  if (-not $t) { return "Untitled" }
  return $t
}

foreach ($bucket in $buckets) {
  $key = "$($bucket.mood)-$($bucket.language)"
  $counts[$key] = 0
  foreach ($q in $bucket.queries) {
    if ($counts[$key] -ge 110) { break }
    $uri = "{0}?q={1}&filter=videos" -f $api, [uri]::EscapeDataString($q)
    try {
      $raw = Invoke-WebRequest -Uri $uri -TimeoutSec 30 -UseBasicParsing
      $text = [System.Text.Encoding]::UTF8.GetString($raw.RawContentStream.ToArray())
      $res = $text | ConvertFrom-Json
    } catch {
      Write-Output "FAIL $key $q :: $($_.Exception.Message.Split([char]10)[0])"
      Start-Sleep -Milliseconds 500
      continue
    }
    foreach ($it in @($res.items)) {
      if ($counts[$key] -ge 110) { break }
      if ($it.type -ne "stream") { continue }
      if ($it.isShort) { continue }
      $dur = 0
      try { $dur = [int]$it.duration } catch { continue }
      if ($dur -lt 80 -or $dur -gt 720) { continue }
      $url = [string]$it.url
      if ($url -notmatch "v=([A-Za-z0-9_-]{11})") { continue }
      $id = $Matches[1]
      if ($seen.ContainsKey($id)) { continue }
      $seen[$id] = $true
      $counts[$key] = $counts[$key] + 1
      $mins = [math]::Floor($dur / 60)
      $secs = "{0:d2}" -f ($dur % 60)
      $uploader = [string]$it.uploaderName
      if (-not $uploader) { $uploader = "YouTube" }
      $library.Add([ordered]@{
        title = (Clean-Title ([string]$it.title))
        meta = "$uploader · $mins`:$secs"
        mood = $bucket.mood
        language = $bucket.language
        youtubeId = $id
      }) | Out-Null
    }
    Write-Output "$key $($counts[$key]) after $q"
    Start-Sleep -Milliseconds 350
  }
}

$dest = Join-Path (Resolve-Path (Join-Path $PSScriptRoot "..\src")).Path "mood-library.json"
$json = $library | ConvertTo-Json -Depth 4
[System.IO.File]::WriteAllText($dest, $json, [System.Text.UTF8Encoding]::new($false))
Write-Output "WROTE $dest"
Write-Output "TOTAL $($library.Count)"
$counts.GetEnumerator() | ForEach-Object { Write-Output "$($_.Key)=$($_.Value)" }
