export type AnalysisStatus = 'idle' | 'analyzing' | 'complete' | 'error'

export type OverallVerdict = 'normal' | 'attention' | 'critical'

export type FindingSeverity = 'low' | 'medium' | 'high'

export interface Finding {
  id: string
  label: string
  confidence: number
  severity: FindingSeverity
  description: string
}

export interface AnalysisResult {
  overall: OverallVerdict
  summary: string
  findings: Finding[]
  processedAt: Date
  modelVersion: string
}

export interface UploadedImage {
  url: string
  name: string
  size: number
}
